import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Sku = () => {
    return (
        <View style={{ flex: 1, }}>
              <View>
            <View><Text style={{fontSize:23,color:'black',marginStart:20,marginTop:20}}>SKU Batch Wise Track</Text></View>
        <View style={styles.tableContainer}>
            <ScrollView horizontal>
                <View>
                    <View style={styles.tableRow}>
                        <View style={styles.columnHeader}>
                            <Text style={styles.columnHeaderText}>SKU</Text>
                        </View>
                        <View style={styles.columnHeader}>
                            <Text style={styles.columnHeaderText}>Quality Check</Text>
                        </View>
                        <View style={styles.columnHeader}>
                            <Text style={styles.columnHeaderText}>Wash In</Text>
                        </View>
                        <View style={styles.columnHeader}>
                            <Text style={styles.columnHeaderText}>Wash Out</Text>
                        </View>
                        <View style={styles.columnHeader}>
                            <Text style={styles.columnHeaderText}>Finish Product</Text>
                        </View>
                        <View style={styles.columnHeader}>
                            <Text style={styles.columnHeaderText}>Shipment</Text>
                        </View>
                    </View>
                    <ScrollView style={styles.tableBody} nestedScrollEnabled>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}>Jockey-61X2-001</Text>
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="pan-tool" size={20} color="orange" />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}></Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}></Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}>Jockey-61X2-002</Text>
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="cancel" size={20} color="red" />
                            </View>
                            <View style={styles.tableCell}>
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}></Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}></Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}>Jockey-61X2-003</Text>
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                                                        </View>
                            <View style={styles.tableCell}>
                            <Icon name="pan-tool" size={20} color="orange" />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}></Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}>Jockey-61X2-004</Text>
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="cancel" size={20} color="red" />
                            </View>
                            <View style={styles.tableCell}>
                            </View>
                            <View style={styles.tableCell}>
                            </View>
                            <View style={styles.tableCell}>
                            </View>
                            <View style={styles.tableCell}>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}>Jockey-61X2-005</Text>
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                                                        </View>
                            <View style={styles.tableCell}>
                            <Icon name="pan-tool" size={20} color="orange" />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}> </Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}>Jockey-61X2-006</Text>
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="cancel" size={20} color="red" />
                            </View>
                            <View style={styles.tableCell}>
                            </View>
                            <View style={styles.tableCell}>
                                                        </View>
                            <View style={styles.tableCell}>
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}> </Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text style={styles.cellText}>Jockey-61X2-005</Text>
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                                                        </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                                                        </View>
                            <View style={styles.tableCell}>
                            <Icon name="check-circle" size={20} color="green" />
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
        </View>
        </View>
        </View>
    );

};
export default Sku;