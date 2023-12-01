import React from 'react';
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {loginAPI} from "../../service/LoginRegisterService/LoginService";
import {Link, useNavigate} from "react-router-dom";

const LoginComponent = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
                 data-sidebartype="full"
                 data-sidebar-position="fixed" data-header-position="fixed">
                <div
                    className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <div className="row justify-content-center w-100">
                            <div className="col-md-8 col-lg-4 col-xxl-3">
                                <div className="card mb-0">
                                    <Formik initialValues={{
                                        username: '',
                                        password: '',
                                    }}
                                            onSubmit={(values) => {
                                                loginAPI(values).then(res => {
                                                    const data = JSON.stringify(res.data);
                                                    localStorage.setItem("data", data)
                                                    navigate("/home")
                                                    toast.success('Cập nhật thành công');
                                                }).catch((error) => {
                                                    toast.error('Cập nhật thất bại');
                                                })
                                            }}>
                                        <Form>
                                            <div className="card-body">
                                                <a href="#"
                                                   className="text-nowrap logo-img text-center d-block py-3 w-100">
                                                    <img src="/images/logos/Post_Office-logo.png" width="180" alt=""/>
                                                </a>
                                                <p className="text-center"></p>
                                                <div className="mb-3">
                                                    <label className="form-label">Username</label>
                                                    <Field type="text" className="form-control" name={"username"}/>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label">Password</label>
                                                    <Field type="password" className="form-control"
                                                           name={"password"}/>
                                                </div>
                                                {/*<div*/}
                                                {/*    className="d-flex align-items-center justify-content-between mb-4">*/}
                                                {/*    <div className="form-check">*/}
                                                {/*        <input className="form-check-input primary" type="checkbox"*/}
                                                {/*               value="" id="flexCheckChecked" checked/>*/}
                                                {/*        <label className="form-check-label text-dark"*/}
                                                {/*               htmlFor="flexCheckChecked">*/}
                                                {/*            Remeber this Device*/}
                                                {/*        </label>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                <button type={"submit"}
                                                        className="btn btn-primary w-100 fs-4 mb-4 rounded-2">
                                                    Sign In
                                                </button>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 fw-bold">Do not have an account?</p>
                                                    <Link to={"/register"} className="text-primary fw-bold ms-2">
                                                        Create an account
                                                    </Link>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
        ;
};

export default LoginComponent;