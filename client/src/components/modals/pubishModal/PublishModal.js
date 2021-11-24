import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './PublishModal.css'
import Modal from '../modal/Modal'
import { Upload } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { publishSong } from '../../../redux/user/userActions';
// import styles from 'antd/dist/antd.css';

const { Dragger } = Upload;

function PublishModal({show, setShow}) {
    const [name, setName] = useState(null)
    const [audioFile, setAudioFile] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    const token = useSelector(state => state?.auth?.token)
    const isPostLoading = useSelector(state => state?.user?.isPostLoading)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const publishInfo = new FormData();
        publishInfo.append("files", imageFile);
        publishInfo.append("files", audioFile);
        publishInfo.append("name", name);
        dispatch(publishSong({publishInfo, token}))
    }

    const submitBtn = isPostLoading ? <button className="publish-submit-btn" disabled><i className="fas fa-spinner" ></i></button> 
                                    : <button className="publish-submit-btn">Publish</button>
    return (
        <Modal show={show} onClose={() => setShow(false)}>
            <div className="publish-form"> 
                <form className="form" onSubmit={handleSubmit}>
                    <Dragger 
                        beforeUpload={false}
                        name="files"
                        fileList={[]}
                        onChange={({ fileList: fl }) => {
                            setAudioFile(fl[0].originFileObj);
                        }}
                        showUploadList={false}
                        customRequest={(e)=> console.log(e)}
                        className={`.ant-upload .ant-upload-drag`}
                    >
                        <div className="publish-icon d-flex">
                            <PlusCircleOutlined />
                        </div>
                        <div className="publish-upload-text d-flex"> <span>Drag file to this area to upload</span></div>
                        <div className="publish-upload-text d-flex"> or</div>
                        <div className="publishchoose-upload-text d-flex"> <span>Choose file</span></div>
                    </Dragger>
                    
                    <br/>
                    <div className="input-div">
                        <input 
                            type="text" 
                            name="name" 
                            className="form-input" 
                            placeholder="  " 
                            required 
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}
                            />
                        <label htmlFor="email" className="form-label">Song name</label>
                        <div className="input-icon"><i className="fas fa-guitar"></i></div>
                    </div>
                    <div className="input-div" style={{marginBottom : "0.5rem"}}>
                        <input 
                        type="text" 
                        name="credits" 
                        className="form-input" 
                        placeholder="  " 
                        // onChange={(e)=>{
                        //         setPassword(e.target.value);
                        //     }}
                        />
                        <label htmlFor="credits" className="form-label">Credits</label>
                        <div className="input-icon"><i className="fas fa-music"></i></div>
                    </div>
                    <br/>
                    <div className="input-div d-flex" style={{marginBottom : "0.5rem"}}>
                        <div>Add song cover photo : &nbsp;</div>
                        <input 
                            name="file-message" 
                            id="file-message" 
                            className="file" 
                            type="file" 
                            placeholder=""
                            onChange={(e)=> {
                                setImageFile(e.target.files['0'])}}
                            />
                        <label htmlFor="file-message" className="publishchoose-upload-text " ><span>Choose file</span></label>
                    </div> 
                    <div className="d-flex">
                        {submitBtn}
                        <button type="reset" className="publish-cancel-btn" onClick={()=>setShow(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default PublishModal
