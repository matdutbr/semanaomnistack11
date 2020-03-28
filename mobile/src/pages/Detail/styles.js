import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 5
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 15,
      marginTop: 20 
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 30 
    },   
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    }, 
    incidentProperty: {
        fontSize: 12,
        color: '#41424d',
        fontWeight: 'bold',
        marginTop: 24,
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 12,
        color: '#737380'        
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#13131a',
        lineHeight: 30
    },
    heroDescription: {        
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },
    actions: {                
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {                
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
