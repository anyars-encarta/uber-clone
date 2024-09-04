import React from 'react'
import { KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native'

const InputField = ({
    label,
    labelStyle,
    icon,
    secureTextEntry='false',
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
}) => (
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View className='my-2 w-full'>
                <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>

                <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                    
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )

export default InputField