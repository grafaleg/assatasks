import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {theme} from '../../../../theme';
import {ContactItemProps} from './types';
import Typography from '../../../../components/Typography/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.l,
    gap: theme.spacing.l,
    width: '100%',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginBottom: theme.spacing.m,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
});

export default function ContactItem({
  name,
  avatar,
}: Readonly<ContactItemProps>) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {avatar ? (
          <Image
            style={styles.avatarImage}
            resizeMode="cover"
            source={{
              uri: avatar,
            }}
            testID="avatarImage"
          />
        ) : (
          <Typography testID="avatarFallback" heading>
            {name.charAt(0)}
          </Typography>
        )}
      </View>
      <Typography testID="name" heading>
        {name}
      </Typography>
    </View>
  );
}
