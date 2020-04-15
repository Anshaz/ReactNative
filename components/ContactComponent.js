import React, { Component } from 'react';
import { Card, Button, Icon } from 'react-native-elements';
import { Text, View, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';


class Contact extends Component {

    constructor(props) {
        super(props);
 
    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['confusion@food.net'],
            subject: 'Enquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ScrollView>
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>

            <Card title="Contact Information">

               
                <Text style={{lineHeight: 30 }}>
                    121, Clear Water Bay Road  {"\n"}
                    Clear Water Bay, Kowloon {"\n"}
                    HONG KONG {"\n"}
                    Tel: +852 1234 5678{"\n"}
                    Fax: +852 8765 4321{"\n"}
                    Email:confusion@food.net
                      </Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{ backgroundColor: "#512DA8" }}
                            icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                            onPress={this.sendMail}
                        />
                    </Card>
                    </Animatable.View>
        </ScrollView>
            );
            
        
    };

}



export default Contact;