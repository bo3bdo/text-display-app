import React, { useState } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  View, 
  Text, 
  TouchableOpacity, 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  Share,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData
} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function HomeScreen() {
  const [text, setText] = useState('');
  const [showingText, setShowingText] = useState('');
  const [fontSize, setFontSize] = useState(60);

  // Get theme colors
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  // Handle displaying the text
  const handleDisplayText = () => {
    if (text.trim()) {
      setShowingText(text);
      Keyboard.dismiss();
    }
  };

  // Handle submit when Enter key is pressed
  const handleSubmitEditing = (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    if (text.trim()) {
      setShowingText(text);
    }
  };

  // Share the displayed text
  const shareText = async () => {
    if (showingText) {
      try {
        await Share.share({
          message: showingText
        });
      } catch (error) {
        console.error('Error sharing text:', error);
      }
    }
  };

  // Clear text
  const clearText = () => {
    setText('');
    setShowingText('');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ThemedView style={styles.container}>
        <ScrollView 
          contentContainerStyle={{flexGrow: 1}} 
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.normalContainer}>
            {/* Display area for the text */}
            <View style={styles.displayArea}>
              <Text style={[styles.displayText, { fontSize: fontSize, color: textColor }]}>
                {showingText}
              </Text>
            </View>

            {/* Input area */}
            <View style={styles.inputArea}>
              <TextInput
                style={[styles.textInput, { color: textColor, borderColor: textColor }]}
                value={text}
                onChangeText={setText}
                placeholder="Type here..."
                placeholderTextColor="#888"
                multiline
                blurOnSubmit={true}
                onSubmitEditing={handleSubmitEditing}
              />
              
              {/* Buttons row */}
              <View style={styles.buttonRow}>
                <TouchableOpacity 
                  style={[styles.button, { backgroundColor: textColor }]} 
                  onPress={handleDisplayText}>
                  <Text style={[styles.buttonText, { color: backgroundColor }]}>Display</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.button, { backgroundColor: textColor }]} 
                  onPress={clearText}>
                  <Text style={[styles.buttonText, { color: backgroundColor }]}>Clear</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.button, { backgroundColor: textColor }]} 
                  onPress={shareText}>
                  <Text style={[styles.buttonText, { color: backgroundColor }]}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  normalContainer: {
    flex: 1,
  },
  displayArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    minHeight: 200,
  },
  displayText: {
    textAlign: 'center',
  },
  inputArea: {
    paddingBottom: 20,
    gap: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    textAlign: 'left',
    minHeight: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});