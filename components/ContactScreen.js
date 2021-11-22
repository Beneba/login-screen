import React from 'react';
import { StyleSheet, Text,  View, FlatList } from 'react-native';
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';
import Contact from "./Contact";

function ContactScreen() {
    const contacts = [
        {
        name: "Barack Obama", 
        number:"024-917-5700",
        myprofile: require ("../assets/Obama.jpg")
        },
        {name: "Priscy Talata",
         number:"023-940-2502",
         myprofile: require ("../assets/Pricsilla.png")

        },
        {name: "Francis Frimpong",
         number:"025-985-6552",
         myprofile: require ("../assets/Francis.png"),
        },
        {name: "George John", 
        number:"023-655-000",
        myprofile: require ("../assets/Man.jpg"),
        },
        {name: "Sandra ", 
        number:"024-917-5700",
        myprofile: require ("../assets/Lady.png"),
        },
        {name: "Sir Promise",
         number:"059-561-5820",
         myprofile: require ("../assets/Promise.jpg"),
        },
        {name: "Salary Azasu",
         number:"025-985-6552",
         myprofile: require ("../assets/Salary.jpg"),
        },
        {name: "Miss Tima ", 
        number:"023-655-000",
        myprofile: require ("../assets/woman.png"),
        },
        {name: "Lovia",
         number:"025-985-6552",
         myprofile: require ("../assets/Beautiful.png"),
        },
        {name: "Prez Obama", 
        number:"023-655-000",
        myprofile: require ("../assets/Obama.jpg"),
        },
        
        {name: "George John", 
        number:"023-655-000",
        myprofile: require ("../assets/Beautiful.png"),
        },
    ]
    return (
        <View >
            <FlatList
                data = {contacts}
            renderItem={({item}) => {
                return <Contact myprofile = {item.myprofile} name={item.name} phone={item.number } />
            }}
            keyExtractor ={(item)=> item.number}
            
            />

            
        </View>
    )
}



export default ContactScreen;
