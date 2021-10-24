import React from 'react';
import List from "./List";

export const Title = (props) => {

    const {title, profile, profiles, alertTitle} = props;

    alertTitle();
    console.log(profiles);
    return (
        <div>
            <h1>
                {JSON.stringify(profile)}
                {JSON.stringify(profiles)}
                Title: {title} || {profile.name}
            </h1>
            <h1>List Nama Orang</h1>
            <ul>
                {profiles.map((profile) =>(
                    <List name={profile.name} />
                ))}
            </ul>
        </div>
    );
};

export default Title;
