import { FC } from 'react'
import {
  Container,
  Button,
  useColorMode,
  IconButton,
  Stack,
  Image,
  Box,
  Text,
  Link
} from '@chakra-ui/react'
import me from './me.jpg'
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillMail
} from 'react-icons/ai'
import { FaSun, FaMoon } from 'react-icons/fa'

const App: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box h="100vh">
        <Container h="full" maxW="container.sm">
          <Stack
            alignItems="center"
            justifyContent="center"
            h="full"
            w="full"
            spacing="10"
            direction="column"
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              w="full"
              spacing="1"
              direction="column"
            >
              <Image rounded="full" boxSize="2xs" src={me} />
              <Text
                fontFamily="Montserrat"
                fontSize="2xl"
                fontWeight="bold"
                letterSpacing="1px"
              >
                Reynadi Andreas Priesley
              </Text>
              <Text fontFamily="Montserrat" fontSize="xs" letterSpacing="1px">
                Fullstack Web Developer
              </Text>
              <Text fontFamily="Montserrat" fontSize="2lg" letterSpacing="1px">
                @reynadi531
              </Text>
            </Stack>
            <Stack direction="row" spacing="4">
              <Link href="https://github.com/reynadi531">
                <IconButton
                  fontSize="3xl"
                  aria-label="github"
                  isRound
                  variant="ghost"
                  size="lg"
                  icon={<AiFillGithub />}
                />
              </Link>
              <Link href="https://twitter.com/reynadi17'">
                <IconButton
                  fontSize="3xl"
                  aria-label="twitter"
                  isRound
                  variant="ghost"
                  size="lg"
                  icon={<AiFillTwitterCircle />}
                />{' '}
              </Link>
              <Link href="https://instagram.com/reynadiap">
                <IconButton
                  fontSize="3xl"
                  aria-label="instagram"
                  isRound
                  variant="ghost"
                  size="lg"
                  icon={<AiFillInstagram />}
                />
              </Link>
              <Link href="mailto:rey@reynadi.com">
                <IconButton
                  fontSize="3xl"
                  aria-label="email"
                  isRound
                  variant="ghost"
                  size="lg"
                  icon={<AiFillMail />}
                />
              </Link>
            </Stack>

            <Button
              aria-label="Theme toggle"
              variant="outline"
              fontFamily="Montserrat"
              fontWeight="semibold"
              onClick={toggleColorMode}
              leftIcon={colorMode == 'light' ? <FaMoon /> : <FaSun />}
            >
              {colorMode == 'light' ? 'Dark' : 'Light'}
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default App
