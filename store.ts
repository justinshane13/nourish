import { create } from 'zustand';

interface BarcodeState {
  barcode: string | null;
  justScanned: boolean;
  setBarcode: (barcode: string) => void;
  clearJustScanned: () => void;
}

export const useBarcodeStore = create<BarcodeState>((set) => ({
  barcode: null,
  justScanned: false,
  setBarcode: (barcode) => set({ barcode, justScanned: true }),
  clearJustScanned: () => set({ justScanned: false }),
}));