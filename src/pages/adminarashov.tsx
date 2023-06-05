import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Text,
    Select,
} from '@chakra-ui/react'

import { useContext, useEffect, useState } from 'react'
import { Context } from './_app'
import axios from 'axios'
import Image from 'next/image'
import Head from 'next/head'
const Adminarashov = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { allProducts, setAllProducts } = useContext(Context)

    const [inputs, setInputs] = useState<any>()

    useEffect(() => {
        axios.get("https://arashovshopbot.onrender.com/api/products").then(res => {
            setAllProducts(res.data.data)
        })
    }, [])

    const deleteItem = (id: string | number) => {
        axios.delete(`https://arashovshopbot.onrender.com/api/products/${id}`).then(() => {
            axios.get("https://arashovshopbot.onrender.com/api/products").then(res => {
                setAllProducts(res.data.data)
            })
        })
    }

    const addProduct = () => {
        axios.post("https://arashovshopbot.onrender.com/api/products/create", {
            title: inputs.title,
            image: inputs.image,
            description: inputs.description,
            category: inputs.category,
            price: inputs.price,
        }).then(() => {
            axios.get("https://arashovshopbot.onrender.com/api/products").then(res => {
                setAllProducts(res.data.data)
            })
            onClose()
        })
    }

    return (
        <Box bg={"#222"} minH={"100vh"}>
            <Head>
                <title>Arashov - adminpanel</title>
            </Head>
            <Box>
                <Box py={"15px"} display={"flex"} px={"25px"} justifyContent={"end"}  >
                    <Button onClick={onOpen}>Add Product</Button>
                </Box>
                <Box>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Image</Th>
                                    <Th>Title</Th>
                                    <Th>Description</Th>
                                    <Th>Category</Th>
                                    <Th>price</Th>
                                    <Th>Tools</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    allProducts.map((i: any) => (
                                        <Tr>
                                            <Td>
                                                <Image style={{width: "75px", height: "75px", objectFit: "cover"}} alt='product' width={200} height={200} src={i.image} />
                                            </Td>
                                            <Td>{i.title}</Td>
                                            <Td>{i.description}</Td>
                                            <Td>{i.category}</Td>
                                            <Td>{i.price} so'm</Td>
                                            <Td><Button size={"sm"} onClick={() => deleteItem(i._id)}>Delete</Button></Td>
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"#222"}>
                <ModalHeader>Product qo'shish</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box mb={"25px"} display={"flex"} flexFlow={"row wrap"} gap={"15px 10px"} justifyContent={"center"}>
                        <Box display={"flex"} w={"100%"} justifyContent={"start"} >
                            <Text mb={"-10px"} fontWeight={700} fontSize={"20px"} color={"#fff"} >To'ldiring:</Text>
                        </Box>
                        <Input onChange={e => setInputs({...inputs, title: e.target.value})} placeholder="Title..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                        <Select defaultValue={"Go'sht"} value={inputs?.category} onChange={e => setInputs({...inputs, category: e.target.value})} placeholder='Category'>
                            <option value="Go'sht">Go'sht</option>
                            <option value='Somsa'>Somsa</option>
                            <option value='Shashlik'>Shashlik</option>
                        </Select>
                        <Input onChange={e => setInputs({...inputs, price: e.target.value})} placeholder="Price..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                        <Input onChange={e => setInputs({...inputs, description: e.target.value})} placeholder="Description..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                        <Input onChange={e => setInputs({...inputs, image: e.target.value})} placeholder="Image URL..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' onClick={addProduct} mr={3}>Jo'natish</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Adminarashov