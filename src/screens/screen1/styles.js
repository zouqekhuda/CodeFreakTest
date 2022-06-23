import { StyleSheet, } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    detailsMainContainer: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        width: '50%'
    },
    profileDetailsContainer: {
        flexDirection: 'row',
        height: '10%',
        alignItems: 'center'
    },
    imageContainer: {
        height: '90%',
        width: '30%',
        borderRadius: 100,
        marginLeft: 20
    },
    imageStyles: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    textContainer: {
        marginLeft: 10,
    },
    helloText: {
        fontSize: 17,
        fontWeight: '400',
        color: 'grey'
    },
    userNameText: {
        fontSize: 26,
        fontWeight: '700',
        color: 'black'
    },
    balanceDetailsContainer: {
        alignItems: 'center',
        width: '50%'
    },
    earningDonationContainer: {
        flexDirection: 'row',
        marginTop: 15,
        width: '100%'
    },
    typeContainer: {
        width: '50%',
        alignItems: 'center',
        borderBottomColor: '#3E3E3E',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    dateContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#F9F9F9',
        padding: 10,
        alignItems: 'center',
        borderRadius: 8
    },
    selectedType: {
        backgroundColor: 'black',
        alignItems: 'center',
        width: '26%',
        paddingHorizontal: '5%',
        paddingVertical: '1%',
        borderRadius: 5
        // width: '40%'
    },
    selectedText: {
        color: 'white',
        alignItems: 'center'
        // width: '40%'
    },
    unselectedType: {
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        width: '26%',
        borderLeftColor: '#E9E9E9',
        borderLeftWidth: 1
        // width: '50%'
    },
    unselectedText: {
        color: 'black',
        alignItems: 'center',
        // width: '40%'
    },
    blueText: {
        color: '#00B5FF',
        fontSize: 14,
        fontWeight: '500'
    },
    transactionContainer: {
        height: '12%',
        width: '95%',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        padding: 10,
        margin: 10,
        borderRadius: 15
    }
});
export default styles