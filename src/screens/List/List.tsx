import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {theme} from '../../theme';
import ContactItem from './elements/ContactItem/ContactItem';
import {CONTACT_QUERY_PARAMS} from '../../lib/api/contacts/contacts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.l,
    gap: theme.spacing.m,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loading = () => (
  <View testID="loadingIndicator" style={styles.loading}>
    <ActivityIndicator color={theme.colors.primary} />
  </View>
);

export default function List() {
  const {isLoading, isError, data, error} = useQuery(CONTACT_QUERY_PARAMS);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Text testID="errorMessage">{error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ContactItem name={item.name} avatar={item.avatar} />
      )}
    />
  );
}
