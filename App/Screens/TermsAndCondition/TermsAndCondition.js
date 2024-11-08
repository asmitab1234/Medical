import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const TermsAndCondition = () => {
    return (
        <Container>
            <BackHeader title='Terms & Conditon' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                <Text
                    style={styles.TextStyl}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    . Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    . Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    . Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of typ has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                    standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of typ has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </Text>
            </ScrollView>
        </Container>
    )
}

export default TermsAndCondition

const styles = StyleSheet.create({
    TextStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginBottom: moderateScale(10)
    }
})