import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const SkeletonLeaderBoardCard = () => {
    const animatedValue = React.useRef(new Animated.Value(0));

    useEffect(() => {
        const animation = Animated.loop(
            Animated.timing(animatedValue.current, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                isInteraction: false,
                delay: 200, // Add a delay to stagger the animation
            })
        );

        animation.start();

        return () => {
            animation.stop();
        };
    }, []);

    const backgroundColor = animatedValue.current.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E0E0E0', '#FFFFFF'], // Adjust colors to match the desired styles
    });

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Animated.View
                    style={[
                        styles.profileImage,
                        {
                            backgroundColor,
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.textPlaceholder,
                        {
                            backgroundColor,
                        },
                    ]}
                />
            </View>
            <Animated.View style={[styles.placeholder, { backgroundColor, width: '10%', height: 20 }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 5,
        flex: 1,
        gap:10
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 7,
        flex:0
    },
    textPlaceholder: {
        width: '50%',
        height: 20,
        borderRadius: 4,
    },
    subHeading: {
        fontWeight: '700',
        fontSize: 14,
        borderRadius: 4,
    },
    placeholder: {
        borderRadius: 4,
        flex:0
    },
});

export default SkeletonLeaderBoardCard;
