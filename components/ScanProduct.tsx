import { useBarcodeStore } from '@/store';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Overlay from './Overlay';

const ScanProduct = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [hasScanned, setHasScanned] = useState(false);
  const lastScannedTimestampRef = useRef(0);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      setHasScanned(false);
    }, [])
  );

  const handleScan = ({ data }: any) => {
    const timestamp = Date.now();
    if (hasScanned || (timestamp - lastScannedTimestampRef.current < 2000)) {
      return
    }
    lastScannedTimestampRef.current = timestamp;
    setHasScanned(true);

    useBarcodeStore.getState().setBarcode(data);

    setTimeout(() => {
      router.replace("/home");
      setTimeout(() => {
        console.log("sending product data: ", data);
        router.push({
          pathname: "/product",
          params: {
            productName: data
          }
        });
      }, 400)
    }, 400)
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.containerPermission}>
        <Text style={styles.message}>
          We need your permission to{'\n'}access the camera 📸
        </Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" onBarcodeScanned={!hasScanned ? (data) => handleScan(data) : undefined}/>
      <Overlay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
  },
  containerPermission: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f6f9',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#13803d',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ScanProduct;