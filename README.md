# 3SA04-React-Native
## React-Native
- ก่อนที่จะใช้ React-Native ต้องติดตั้ง Node.js, Yarn และ Git ก่อน
- ต่อมาติดตั้ง create-react-app CLI ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator) ด้วยคำสั่ง yarn global add expo-cli
- สร้าง Project สำหรับการพัฒนา React Native ด้วย expo ด้วยคำสั่ง expo init wt-app : (create project wt-app)ตามด้วยcd wt-app
- รันโปรแกรมด้วยคำสั่ง yarn start
## Navigation Library
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง
   - expo install react-native-gesture-handler react-native-reanimated react-native-screens      react-native-safe-area-context @react-native-community/masked-view
   - yarn add @react-navigation/stack @react-navigation/native
- ต้องทำการ import ทุกครั้งที่ใช้งาน Navigation
   - import { NavigationContainer } from '@react-navigation/native';

   - import { createStackNavigator } from '@react-navigation/stack';
## react-native-router-flux
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง
   - expo install react-native-router-flux
   - yarn add react-native-router-flux
- ต้องทำการ import ทุกครั้งที่ใช้งาน
   - import { Router, Scene } from 'react-native-router-flux';
