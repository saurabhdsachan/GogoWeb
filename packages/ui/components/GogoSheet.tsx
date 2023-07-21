import 'react-spring-bottom-sheet/dist/style.css';

import { useRef } from 'react';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';

import { PrimaryFont } from './CustomFont';

export function GogoSheet({
  isOpen,
  onDismiss,
  children,
}: {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
}) {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <BottomSheet
      blocking
      onDismiss={onDismiss}
      open={isOpen}
      snapPoints={({ maxHeight }) => [maxHeight / 2]}
      ref={sheetRef}
    >
      <div className={`p-4 ${PrimaryFont.className}`}>{children}</div>
    </BottomSheet>
  );
}
