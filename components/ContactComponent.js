import React, { Component } from 'react';
import { Card, ListItem } from 'react-native-elements';
import { Text, View } from 'react-native';


class Contact extends Component {

    constructor(props) {
        super(props);
 
    }

    static navigationOptions = {
        title: 'Contact Us'
    };


    render() {
        return (
            <Card title="Contact Information">

               
                <Text style={{lineHeight: 30 }}>
                    121, Clear Water Bay Road  {"\n"}
                    Clear Water Bay, Kowloon {"\n"}
                    HONG KONG {"\n"}
                    Tel: +852 1234 5678{"\n"}
                    Fax: +852 8765 4321{"\n"}
                    Email:confusion@food.net
                      </Text>
            
            </Card>
            );
            
        
    };

}



export default Contact;