import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../Components/CustomeHeader/CustomHeader';

const PrivacyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={'Privacy Policy'} flexValue={2.4} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.privacyText}>
            Your privacy is important to us. This Privacy Policy describes how we collect,
            use, disclose, and manage your information when you use our services.
            Please read the following carefully to understand our practices.
          </Text>
          <SectionTitle title="Information Collection" />
          <Text style={styles.privacyText}>
            We collect information you provide to us when you use our application.
            This may include personal information such as your name, email address, etc.
            We may also automatically collect certain information when you interact
            with our services, such as usage data and device information.
          </Text>
          <SectionTitle title="Information Usage" />
          <Text style={styles.privacyText}>
            The information collected is used to improve our services, personalize
            your experience, and communicate with you about our products and updates.
            We may also use this information for analytics, research, and marketing purposes.
          </Text>
          <SectionTitle title="Information Sharing" />
          <Text style={styles.privacyText}>
            We do not share your personal information with third parties unless required
            for legal reasons or to provide our services. However, we may share
            anonymized and aggregated data for analytics and marketing purposes.
          </Text>
          <SectionTitle title="Security" />
          <Text style={styles.privacyText}>
            We take reasonable measures to protect your information from unauthorized access
            or disclosure. However, no method of transmission over the internet or electronic
            storage is 100% secure. Therefore, we cannot guarantee absolute security.
          </Text>
          {/* Add more sections as needed */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  privacyText: {
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
});

export default PrivacyScreen;
