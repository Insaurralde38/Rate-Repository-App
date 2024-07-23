import { Platform } from "react-native"

const theme = {
    appBar: {
        primary: '#103F79',
        textPrimary: '#F3B229',
        textSecondary: '#FFFFFF'
    },
    colors: {
        textPrimary: '#24292E',
        textSecondary: '#586069',
        primary: '#0366D6',
        white: '#FAFAFA'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}
export default theme