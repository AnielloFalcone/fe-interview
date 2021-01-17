import React, {FC} from 'react';
import background from '../../assets/welcome.jpg'

type LoadingProps = {
    showLoading: boolean
}

const LoadingOverlay: FC<LoadingProps> = ({children, showLoading}) => {
    return (
        <>
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: 'white',
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: showLoading ? 'flex' : 'none',
                    justifyContent: 'center',
                    inset: 0,
                    position: 'absolute',
                    opacity: showLoading ? 1 : 0,
                    transition: 'opacity 1s ease-in',
                    zIndex: 99999
                }}
            />

            <div style={{display: showLoading ? 'none' : ''}}>
                {children}
            </div>
        </>
    );
};

export default LoadingOverlay;
