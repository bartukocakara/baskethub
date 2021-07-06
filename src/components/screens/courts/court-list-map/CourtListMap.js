import React from 'react';
// import GoogleMapReact from 'google-map-react';

const CourtListMap = () => {

    return (
        <div>
            <iframe
            width="600"
            height="450"
            style={{ border:0 }}
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                &q=Space+Needle,Seattle+WA" title="court list map">
            </iframe>
        </div>
    )
}

export default CourtListMap
