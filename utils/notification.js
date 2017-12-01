import {AsyncStorage} from 'react-native';
import { Notifications, Permissions } from 'expo';

/**
 * got this code from the course example:
 * https://github.com/udacity/reactnd-UdaciFitness-complete/blob/setLocalNotification/utils/helpers.js
 */

//Defining notifications Key
const NOTIFICATION_KEY = 'MobileFlashCards:notifications';

export const clearLocalNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
  const createNotification = () => {
    return {
      title: "Study!",
      body: "Train with your cards!",
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }
  
  export const setLocalNotification = () => {
    
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                //Setting when the notification will pop
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(15)
                tomorrow.setMinutes(44)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }