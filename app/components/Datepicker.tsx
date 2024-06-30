import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const Datepickercomponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formattedDate = selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : '';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker} style={styles.dateContainer}>
        <Icon name="calendar" size={20} style={styles.icon} />
        <Text style={styles.dateText}>{selectedDate ? formattedDate : 'Date'}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
    color: '#888',
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
});

export default Datepickercomponent;
