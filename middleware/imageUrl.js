import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const metadata = {
    contentType: 'image/jpeg'
};
const storage = getStorage();

export const getImageUrl = async (file) => {
    let imageUrl = '';
    const storageRef = ref(storage, `images/${file.originalname}`);
    const uploadTask = uploadBytesResumable(storageRef, file.buffer, metadata);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            console.log(`${error}`)
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                imageUrl = downloadURL;
            });
        }
    );
    return imageUrl;
}