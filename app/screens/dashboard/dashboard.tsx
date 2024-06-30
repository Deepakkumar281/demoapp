import React from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";

interface Stage {
  name: string;
  batch?: string; // Make batch property optional
}

const stages: Stage[] = [
  { name: "Quality Check", batch: "Jockey-61X2-001" },
  { name: "Wash In", batch: "Jockey-61X2-001" },
  { name: "Wash Out", batch: "Jockey-61X2-001" },
  { name: "Packing", batch: "Jockey-61X2-001" },
];

const Dashboardscreen: React.FC<any> = () => {
  const renderCard = ({ item }: { item: Stage }) => (
    <View style={styles.card}>
      <Text style={styles.cardTextTopLeft}>{item.name}</Text>
      {item.batch && (
        <Text style={styles.batchText}>Batch : {item.batch}</Text>
      )}
      {item.name === "Quality Check" && (
        <>
          <Text style={styles.statusText}> Approved: 15</Text>
          <Text style={styles.statusText1}> Rejected:2</Text>
          <Text style={styles.batchText1}>Batch : HM 34 FX</Text>
          <Text style={styles.statusText}> Approved: 16</Text>
          <Text style={styles.statusText1}> Rejected:6</Text>
        </>
      )}
      {item.name === "Wash In" && (
        <>
         <Text style={styles.statusText}>Count: 15</Text>
          <Text style={styles.batchText1}>Batch : HM 34 FX</Text>
          <Text style={styles.statusText}>Count: 16</Text>
     
        </>
      )}
      {item.name === "Wash Out" && (
        <>
          <Text style={styles.statusText}>Count: 14</Text>
          <Text style={styles.batchText1}>Batch : HM 34 FX</Text>
          <Text style={styles.statusText}>Count: 15</Text>
        </>
      )}
      {item.name === "Packing" && (
        <>
          <Text style={styles.statusText}>Count: 14</Text>
          <Text style={styles.batchText1}>Batch : HM 34 FX</Text>
          <Text style={styles.statusText}>Count: 15</Text>
        </>
      )}
    </View>
  );

  return (
    <View>
      <FlatList
        data={stages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCard}
      />
    </View>
  );
};

export default Dashboardscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  statusText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "green", // You can adjust the color as needed
    textAlign: "left",
    marginVertical: 4,
    marginLeft: 8,
  },
  statusText1: {
    fontSize: 14,
    fontWeight: "normal",
    color: "red", // You can adjust the color as needed
    textAlign: "left",
    marginVertical: 4,
    marginLeft: 8,
  },
  cardTextTopLeft: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "left",
    marginLeft: -1,
    marginTop: -2,
    marginStart:9
  },
  batchText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "left",
    marginLeft: 8,
  },
  batchText1: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "left",
    marginLeft: 8,
    marginStart:10
  },
  card: {
    backgroundColor: "#e2e8f0",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
});