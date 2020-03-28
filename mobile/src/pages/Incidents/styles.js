import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 15,
      marginTop: 30 
    },    
    headerText: {
      fontSize: 15,
      color: '#737380',
      marginTop: 20 
    },
    headerTextBold: {
        fontWeight: 'bold'
  
    },
    title: {
        fontSize: 25,
        marginBottom: 16,
        marginTop: 28,
        marginLeft: 15,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description: {
       fontSize: 14,
       marginLeft: 15,
       lineHeight: 24,
       color: '#737380' 
    },
    incidentList: {
       marginTop: 32,
    },
    incident: {
       padding: 24,
       borderRadius: 8,
       backgroundColor: '#FFF',
       marginBottom: 16
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41424d',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        marginBottom:24
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
