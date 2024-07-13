import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import './App.css';

function App() {
  const [currentChallenge, setCurrentChallenge] = useState(null);

  const challenges = {
    sqlInjection: {
      title: 'SQL Injection',
      description: 'Practice SQL Injection vulnerabilities.',
      content: 'SQL Injection challenge content goes here.'
    },
    xss: {
      title: 'Cross-Site Scripting (XSS)',
      description: 'Practice XSS vulnerabilities.',
      content: 'XSS challenge content goes here.'
    },
    csrf: {
      title: 'Cross-Site Request Forgery (CSRF)',
      description: 'Practice CSRF vulnerabilities.',
      content: 'CSRF challenge content goes here.'
    },
    rce: {
      title: 'Remote Code Execution (RCE)',
      description: 'Practice RCE vulnerabilities.',
      content: 'RCE challenge content goes here.'
    },
    lfi: {
      title: 'Local File Inclusion (LFI)',
      description: 'Practice LFI vulnerabilities.',
      content: 'LFI challenge content goes here.'
    }
  };

  const handleStartChallenge = (challengeKey) => {
    console.log(`Starting challenge: ${challengeKey}`);
    setCurrentChallenge(challenges[challengeKey]);
    console.log('Current challenge set to:', challenges[challengeKey]);
  };

  return (
    <ChakraProvider>
      <Box className="App" p={5}>
        <header className="App-header">
          <Heading as="h1" size="xl" mb={5}>
            Cybersecurity Challenges
          </Heading>
          <VStack spacing={4}>
            {Object.keys(challenges).map((key) => (
              <Box key={key}>
                <Heading as="h2" size="md">{challenges[key].title}</Heading>
                <Text>{challenges[key].description}</Text>
                <Button colorScheme="teal" mt={2} onClick={() => handleStartChallenge(key)}>Start Challenge</Button>
              </Box>
            ))}
          </VStack>
          {currentChallenge && (
            <Box mt={10}>
              <Heading as="h2" size="lg">{currentChallenge.title}</Heading>
              <Text>{currentChallenge.content}</Text>
            </Box>
          )}
        </header>
      </Box>
    </ChakraProvider>
  );
}

export default App;
/* TODO: Add onClick event handlers for challenge buttons */
console.log('handleStartChallenge called with:', challengeKey);
console.log('currentChallenge state after update:', currentChallenge);
