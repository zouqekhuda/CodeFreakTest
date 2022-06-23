import { StyleSheet } from 'react-native';
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    imageContainer: {
        height: '10%',
        width: '18%',
        // borderRadius: 100,
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
        marginRight: '12%'
    },
    imageStyles: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        marginRight: -20,
        zIndex: 100
    },
    imageTwoStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    blueContainer: {
        width: '90%',
        alignSelf: 'center',
        padding: '10%',
        backgroundColor: '#00B5FF',
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center"
    },
    transactionHeader: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    transactionAmount: {
        color: 'white',
        fontSize: 36,
        fontWeight: '600'
    },
    transactionDetailText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    transactionDetailContainer: {
        width: '90%',
        alignSelf: 'center',
        padding: '10%',
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        justifyContent: 'space-between',
        marginTop: 10
    },
    transactionDetail: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    headerColor: {
        color: '#666666',
        fontSize: 16,
        fontWeight: '400'
    },
    userNameText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        alignSelf: 'center'
    },
});
export default styles