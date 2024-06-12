import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';

const MyShiftScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Shift</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Widget with refresh icon */}
        <View style={styles.refreshWidget}>
          
          <TouchableOpacity>
            <Icon name="refresh" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Picked Shift</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Calendar */}
        <Calendar
          // Initially visible month. Default = Date()
          current={'2023-06-11'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2023-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2023-12-30'}
          // Hide month navigation arrows
          hideArrows={true}
          // Hide extra days
          hideExtraDays={true}
          // Disable month change
          disableMonthChange={true}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => { console.log('selected day', day) }}
          // Custom theme
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#d3d3d3',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          style={styles.calendar}
        />

        {/* Week, Duration, Shift widgets */}
        <View style={styles.infoRow}>
          <View style={styles.infoWidget}>
            <Text>Week</Text>
            <Text>Details</Text>
          </View>
          <View style={styles.infoWidget}>
            <Text>Duration</Text>
            <Text>Details</Text>
          </View>
          <View style={styles.infoWidget}>
            <Text>Shift</Text>
            <Text>Details</Text>
          </View>
        </View>

        {/* Shift details */}
        <View style={styles.shiftDetails}>
          <Text>Day: Monday</Text>
          <Text>Time: 9:00 AM - 5:00 PM</Text>
          <Text>Shift Details: Example details here</Text>
          <TouchableOpacity style={styles.takeShiftButton}>
            <Text style={styles.takeShiftButtonText}>Take Shift</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    
  },
  mainContent: {
    padding: 16,
  },
  refreshWidget: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  button: {
    flex: 1,
    padding: 16,
    marginHorizontal: 4,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendar: {
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  infoWidget: {
    flex: 1,
    padding: 16,
    marginHorizontal: 4,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    alignItems: 'center',
  },
  shiftDetails: {
    padding: 16,
    marginVertical: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  takeShiftButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  takeShiftButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyShiftScreen;
