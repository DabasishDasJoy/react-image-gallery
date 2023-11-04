import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/main/Main';
import ImageGallery from '../../pages/ImageGallery/ImageGallery';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <ImageGallery></ImageGallery>,
            },
        ],
    },
]);
