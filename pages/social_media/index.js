import React from "react";



    const SocialMedia = () => {
        return (
            <div>
                <h1>Instagram, Twiter</h1>
                {/* lista com as tecnologias */}
                <ul>
                    {process.env.REACT_APP_INSTAGRAM_CLIENT_ID}
                    <li>Instagram API - </li>
                    <li>Twiter API - </li>
                </ul>
         
                <a href={`https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_INSTAGRAM_AUTH_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`}>Instagram Auth</a>
              
            </div>
        );
    }
    
export default SocialMedia;