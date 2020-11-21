import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: 'home',
                        },
                    },
                    Doctors: {
                        screens: {
                            DoctorsScreen: 'doctors',
                        },
                    },
                    Appointments: {
                        screens: {
                            AppointmentsScreen: 'appointments',
                        },
                    },
                    Profile: {
                        screens: {
                            ProfileScreen: 'profile',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
