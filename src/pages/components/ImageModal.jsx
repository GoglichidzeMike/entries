
export const ImageModal = (props) =>{
  const {downloadImage, setIsModalActive, modalImage} = props;
  return  <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center z-50">
            <div className="image-modal p-4 bg-white rounded shadow" style={{maxWidth: '600px', maxHeight: '90%'}}>
              <div className="mb-2 flex justify-between">
                <p className="bg-third px-2 py-1 rounded cursor-pointer " onClick={downloadImage}>Download</p>
                <div className='close' onClick={() => setIsModalActive(false)}></div>
              </div>
              <img src={process.env.REACT_APP_STATIC_URL + modalImage.data.value} alt="Modal" className="mx-auto" style={{maxWidth: '90%', maxHeight: '90%'}} />
            </div>
          </div>
}