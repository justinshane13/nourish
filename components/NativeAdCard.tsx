import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  NativeAd,
  NativeAdChoicesPlacement,
  NativeMediaAspectRatio,
  TestIds
} from 'react-native-google-mobile-ads';

const NativeAdCard = () => {
    const [nativeAd, setNativeAd] = useState<NativeAd | null>(null);


    // TODO: make call to action and icon clickable using refs and pass them to the registerViewsForInteraction function from admob
    useEffect(() => {
        let isMounted = true;

        const loadAd = async () => {
            try {
                const ad = await NativeAd.createForAdRequest(TestIds.NATIVE, {
                    aspectRatio: NativeMediaAspectRatio.LANDSCAPE,
                    adChoicesPlacement: NativeAdChoicesPlacement.BOTTOM_RIGHT
                });
                if (isMounted) {
                    setNativeAd(ad);
                }
            } catch (err) {
                console.error("Failed to load native ad: " , err)
            }
        }

        loadAd();

        return () => {
            isMounted = false;
        };
    }, [])

    console.log(nativeAd);

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                {nativeAd?.icon?.url && (
                <Image source={{ uri: nativeAd?.icon.url }} style={styles.icon} />
                )}
                <Text style={styles.headline}>{nativeAd?.headline}</Text>
            </View>

            {nativeAd?.body && <Text style={styles.body}>{nativeAd?.body}</Text>}

            {nativeAd?.mediaContent && !nativeAd?.icon?.url && (
                <View style={styles.mediaPlaceholder}>
                <Text style={styles.mediaText}>Ad Media</Text>
                </View>
            )}

            {nativeAd?.callToAction && (
                <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
                <Text style={styles.ctaText}>{nativeAd?.callToAction}</Text>
                </TouchableOpacity>
            )}

            <Text style={styles.adLabel}>Ad · Sponsored</Text>
        </View>
    )
}

export default NativeAdCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 10,
  },
  headline: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  body: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  mediaPlaceholder: {
    height: 150,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  mediaText: {
    color: '#aaa',
    fontSize: 13,
  },
  ctaButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#1682a3ff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  ctaText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  adLabel: {
    marginTop: 10,
    fontSize: 11,
    color: '#888',
    textAlign: 'right',
  },
});