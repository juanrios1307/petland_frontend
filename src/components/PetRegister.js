import React, { useState,useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    Upload,
    Modal, InputNumber,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Axios from "axios";
import Swal from "sweetalert2";
import {Redirect} from "react-router-dom";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const PetRegister = () => {
    const [form] = Form.useForm();

    const [bool,setBool] = useState(false);

    const [ciudad, setCiudad] = useState([]);
    const [tipos, setTipos] = useState(["Perro","Gato","Tortuga","Vaca","Canario"]);
    const [tipo, setTipo] = useState('')
    const [size, setSize] = useState('')

    const[ previewVisible,setPreviewVisible]=useState(false)
    const [previewImage,setPreviewImage]=useState( '')
    const [previewTitle,setPreviewTitle]=useState('')
    const [fileList,setFileList]=useState([])

    const [imagesUrl,setImagesUrl]=useState('')


    const onFinish=(values) =>{
        Register(values)
    }


    useEffect(()=>{

    },[])


    //Registro lugar, imagenes y especifico
    const Register = async(values) => {

        const token = localStorage.getItem("token")


        values.tipo=values.tipo.toLowerCase()

        if(fileList != undefined || fileList.length>0) {
            values.imagen = await uploadImage()
        }


        console.log(values)


        const url='https://shielded-eyrie-97252.herokuapp.com/api/pet/'

        const config = {
            method: 'post',
            url: url ,
            headers: {
                'access-token': token
            },
            data: values

        };

        const response = await Axios(config)

        const mensaje = response.data.mensaje
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            setBool(true)
            window.location.reload(false)
        }else{
            Swal.fire({
                title: status,

            })

        }
    }

    //Acciones con upload
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


    const handleCancel = () => setPreviewVisible( false );

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage( file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))

    };

    const handleChange = ({fileList}) =>{
        console.log(fileList)
        setFileList(fileList)
    };

    const handleRemove = () =>{
        console.log("Files REMOVE")

    };

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    //SUbo Imagenes
    const uploadImage =async () => {


        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/drn7vichy/image/upload';
        const UPLOAD_PRESET = 'tiyycnrd';

        const formImages = new FormData();

        formImages.append('file', fileList[0].originFileObj);
        formImages.append('upload_preset', UPLOAD_PRESET);

        const resI = await Axios.post(CLOUDINARY_URL, formImages);

        return resI.data.secure_url

    };



    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    if(bool){
        return(
            <Redirect to="/pet/mylist"/>
        )
    }else if(localStorage.getItem("token")){
        return (
            <div id="hero" className="registerBlock registerPlaceBlock all">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Registrar Mascota</h2>
                    </div>

                    <div className="block">
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}

                            scrollToFirstError
                        >

                            <Form.Item
                                name="nombre"
                                label="Nombre "
                                rules={[{required: true, message: 'Por favor ingresa el nombre de la mascota!', whitespace: true}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="ciudad"
                                label="Ciudad"
                                rules={[{required: true, message: 'Por favor ingresa la ciudad de la mascota!', whitespace: true}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="raza"
                                label="Raza "
                                rules={[{required: true, message: 'Por favor ingresa la raza!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="color"
                                label="Color"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresa el color!',
                                    },
                                ]}
                            >

                                    <Input />

                            </Form.Item>

                            <Form.Item
                                name="edad"
                                label="Edad"
                                rules={[{required: true, message: 'Por favor ingresa la edad en años!'},

                                ]}
                            >

                                <InputNumber />


                            </Form.Item>


                            <Form.Item
                                name="size"
                                label="Tamaño "
                                rules={[{required: true, message: 'Por Favor ingresa un tamaño!'}]}>
                                <Select onChange={e=>setSize(e)}>
                                    <Option key="grande" id="grande">Grande</Option>
                                    <Option key="mediano" id="mediano">Mediano</Option>
                                    <Option key="pequeño" id="pequeño">Pequeño</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="tipo"
                                label="Tipo "
                                rules={[{required: true, message: 'Por Favor Elije El tipo de tu Establecimiento!'}]}>
                                <Select onChange={e=>setTipo(e)}>
                                    {tipos.map(i =>(
                                        <Option key={i} value={i} id={i}>{i}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="imagenes"
                                label="Imagenes"
                            >
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    onRemove={handleRemove}
                                    customRequest={dummyRequest}
                                    accept="image/png, image/jpeg"
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal
                                    visible={previewVisible}
                                    title={previewTitle}
                                    footer={null}
                                    onCancel={handleCancel}
                                >
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>

                            </Form.Item>


                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Guardar
                                </Button>
                            </Form.Item>

                        </Form>

                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div id="hero" className="registerBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Por Favor Inicia Sesion </h2>
                    </div>
                </div>
            </div>
        )
    }
};

export default PetRegister
