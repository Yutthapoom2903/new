import axios from 'axios';

function Api() {
    const handleFileUpload = async (event) => {
        const selectedFile = event.target.files[0];
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://127.0.0.1:8000/insertMenuMinIO/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('File upload success:', response.data);
            // ทำสิ่งที่คุณต้องการกับ response ที่ได้จากการ insert file ได้ที่นี่
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    
    return (
        <>
            <input type="file" onChange={handleFileUpload} />
            {/* สร้าง input สำหรับอัปโหลดไฟล์และให้มันเรียกฟังก์ชัน handleFileUpload เมื่อมีการเปลี่ยนแปลง */}
        </>
    );
}

export default Api;
