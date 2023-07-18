import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
        alignItems: 'center' ,
        marginHorizontal:20
    },
    input:{
         borderWidth: 1,
         paddingLeft: 20,
         width: '90%'
    },
    button:{
        marginTop: 50,
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 50,
        width: 100,
        justifyContent: 'center' ,
        marginBottom: 70
    },
    text: {
        color: '#ffff'
    },
    errorMsg : {
        color:'red',
        marginTop:15
    }
})