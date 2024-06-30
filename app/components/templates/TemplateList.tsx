import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, List } from 'react-native-paper'
import NavigationService from '../../navigation/NavigationService'
import { UserState, useSelector } from '../../redux'


interface TemplateListProps {
    item: any,
    user: UserState
}


const TemplateList: React.FC<TemplateListProps> = ({ item, user }) => {    
    const previewForm = (formId: number) => {
       
        NavigationService.navigate("UserApp", {
            screen: "TemplateSubmitForm",
            params: {
                formId
            }
        })
    }
    const EditForm = (formId: number) => {
        console.log('formId for edit oooooooooooooooo',formId)
        NavigationService.navigate("UserApp", {
            screen: "TemplateSubmitForm",
            params: {
                formId
            }
        })
    }
    return (
        <Card style={styles.card}>
            <Card.Title
                style={styles.cardTitle} 
                title={item.title}
                subtitle={item.description} />
            <React.Fragment> 
                {(user.userRoles.includes("Admin")) &&
                    <Card.Actions style={styles.cardActions}>
                         <Button onPress={() => {
                            previewForm(item.ipss_form_id)
                        }}>Preview form</Button>
                 {/*   <Button onPress={() => {
                            EditForm(item.ipss_form_id)
                        }}>Edit form</Button> */}
                    </Card.Actions>
                    
                }
            </React.Fragment>
            <React.Fragment>
                {(user.userRoles.includes("Supervisor")) &&
                    <Card.Actions style={styles.cardActions}>
                        <Button onPress={() => {
                            previewForm(item.ipss_form_id)
                        }}>Enter Data</Button>
                    </Card.Actions>
                }
            </React.Fragment>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10
    },
    cardTitle: {
        marginBottom: 0
    },
    cardActions: {
        marginTop: 0
    }
})

export default TemplateList