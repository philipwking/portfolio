import React from 'react';
import './App.css';
import { Pane, Button, Text, Heading, Paragraph, Card, EnvelopeIcon, Badge, Link } from 'evergreen-ui'
import profilePic from './images/IMG_0604.JPG'
import winrate from './images/winrate.png'
import resume from './images/newresume.pdf'
import { Breakpoint, BreakpointProvider } from 'react-socks';


function App() {

  return (
    <BreakpointProvider>
      <Breakpoint small down>
        <Pane>
        <Pane height={50} elevation={3} padding={5} background='tealTint'>
            <Pane display='flex' justifyContent='center' alignItems='baseline'>
              <Heading size={800}>
                phil
              </Heading>
              <a href='https://www.linkedin.com/in/philip-king-0a80239b/'>
              <Button marginLeft={50} appearance='minimal'>
                LinkedIn
               </Button>
              </a>
              <a href={'https://github.com/philipwking'}>
                <Button marginLeft={30} appearance='minimal'>
                  Github
                </Button>
              </a>
            </Pane>
          </Pane>
          <Pane display='flex' flexDirection={'column'} padding={10}>
            <Pane>
              <Pane display='flex'>
                <Heading size={900} padding={20} >
                  Hi, I’m Philip! 👋
              </Heading>
                <Pane elevation={4} padding={15} borderRadius={10} background="greenTint">
                  <img height='250' src={profilePic} alt='myface' border="default">
                  </img>
                </Pane>
              </Pane>
              <Heading padding={20} >
                I'm a full-stack web developer from Houston, Texas.
              </Heading>
              <Paragraph padding={20} >
                I am currently working mostly in the MERN stack and have experience with MySql, multiple CSS frameworks (Bootstrap, Material.ui, Bulma), and a lot of Node packages.
              </Paragraph>
              <Pane padding={20}>
                <a href={'mailto:philipwking@gmail.com'}>
                  <Button appearance='primary' margin={10}>
                    <EnvelopeIcon margin={5}></EnvelopeIcon>
                    Contact
                </Button>
                </a>
                <a href={resume} download="philipsresume.pdf" >
                  <Button appearance='minimal' margin={10}>
                    Download my Resume
                  </Button>
                </a>
              </Pane>
            </Pane>

          </Pane>
          <Pane background="tint2">
            <Heading marginLeft={150} paddingTop={100} >
              My Work
        </Heading>
            <Pane display='flex' justifyContent='space-evenly' padding={20}>
              <Card>
                <Card padding={15} borderRadius={10} elevation={2}>
                  <img height={250} width={350} src={winrate} alt='winrate.gg'>
                  </img>
                </Card>
                <Heading padding={10} size={700}>
                  Winrate.gg
            </Heading>
                <Text padding={10} >
                  <Badge marginRight={5} color="green" isSolid>HTML</Badge>
                  <Badge marginRight={5} color="blue" isSolid>CSS</Badge>
                  <Badge marginRight={5} color="red" isSolid>MongoDb</Badge>
                  <Badge marginRight={5} color="orange" isSolid>React</Badge>
                </Text>
                <Paragraph padding={10} width={350}>
                  A tool for analyzing your League of Legends performance. Uses RIOT api data.
            </Paragraph>
              </Card>
            </Pane>
          </Pane>
          <Pane background="overlay" >
            <Pane >
              <Text color='#F9F9FB' size={500}>
                Thanks for checking out my website
          </Text>
              <Heading color='#F9F9FB' size={500}>
                I'm currently open to opportunities!
          </Heading>
            </Pane>
            <Pane>
              <Text color='#F9F9FB' size={500}>
                Contact Me:
          </Text>
              <Heading color='#F9F9FB' size={500}>
                philipwking@gmail.com
          </Heading>
            </Pane>
          </Pane>
          <Pane display='flex' background='#234361'>
            <Text color='#E4E7EB'>
              Designed by
            </Text>
            <Link color='#E4E7EB' paddingLeft={3}>
              Arix
             </Link>
            <Text color='#E4E7EB' paddingLeft={3}>
              , developed by Philip.
            </Text>
          </Pane>
          <Pane display='flex' background='#234361'>
            <Text color='#E4E7EB'>
              Philip King © 2020
            </Text>
          </Pane>
        </Pane>
      </Breakpoint>
      <Breakpoint medium up>
        <Pane>
          <Pane height={64} elevation={3} padding={16} background='tealTint'>
            <Pane display='flex' justifyContent='left' alignItems='center'>
              <Heading size={800} marginLeft={120}>
                phil
              </Heading>
              <a href={'https://www.linkedin.com/in/philip-king-0a80239b/'}>
              <Button marginLeft={50} appearance='minimal'>
                LinkedIn
               </Button>
              </a>
              <a href={'https://github.com/philipwking'}>
                <Button marginLeft={30} appearance='minimal'>
                  Github
                </Button>
              </a>
            </Pane>
          </Pane>
          <Pane display='flex' alignItems='center' padding={100}>
            <Pane height='500' >
              <Heading size={900} padding={20}>
                Hi, I’m Philip! 👋
          </Heading>
              <Heading padding={20}>
                I'm a full-stack web developer from Houston, Texas.
          </Heading>
              <Paragraph padding={20} >
                I am currently working mostly in the MERN stack and have experience with MySql, multiple CSS frameworks (Bootstrap, Material.ui, Bulma), and a lot of Node packages.
          </Paragraph>
              <Pane padding={20}>
                <a href={`mailto:philipwking@gmail.com`}>
                  <Button appearance='primary' margin={10}>
                    <EnvelopeIcon margin={5}></EnvelopeIcon>
                    Contact
                </Button>
                </a>
                <a href={resume} download="philipsresume.pdf" >
                  <Button appearance='minimal' margin={10}>
                    Download my Resume
                  </Button>
                </a>
              </Pane>
            </Pane>
            <Pane elevation={4} padding={15} borderRadius={10} background="greenTint">
              <img height='500' src={profilePic} alt='myface' border="default">
              </img>
            </Pane>
          </Pane>
          <Pane background="tint2">
            <Heading marginLeft={150} paddingTop={100}>
              My Work
        </Heading>
            <Pane display='flex' justifyContent='space-evenly' padding={20}>
              <Card>
                <Card padding={15} borderRadius={10} elevation={2}>
                  <img height={250} width={350} src={winrate} alt='winrate.gg'>
                  </img>
                </Card>
                <Heading padding={10} size={700}>
                  Winrate.gg
            </Heading>
                <Text padding={10} >
                  <Badge marginRight={5} color="green" isSolid>HTML</Badge>
                  <Badge marginRight={5} color="blue" isSolid>CSS</Badge>
                  <Badge marginRight={5} color="red" isSolid>MongoDb</Badge>
                  <Badge marginRight={5} color="orange" isSolid>React</Badge>
                </Text>
                <Paragraph padding={10} width={350}>
                  A tool for analyzing your League of Legends performance. Uses RIOT api data.
            </Paragraph>
              </Card>
            </Pane>
          </Pane>
          <Pane background="overlay" display='flex' justifyContent='space-between' padding={100}>
            <Pane marginLeft={20}>
              <Text padding={50} color='#F9F9FB' size={500}>
                Thanks for checking out my website
          </Text>
              <Heading padding={50} color='#F9F9FB' size={900}>
                I'm currently open to opportunities!
          </Heading>
            </Pane>
            <Pane marginRight={20}>
              <Text padding={50} color='#F9F9FB' size={500}>
                Contact Me:
          </Text>
              <Heading padding={50} color='#F9F9FB' size={900}>
                philipwking@gmail.com
          </Heading>
            </Pane>
          </Pane>
          <Pane display='flex' alignItems='center' background='#234361'>
            <Text marginLeft={100} color='#E4E7EB'>
              Designed by
          </Text>
            <Link color='#E4E7EB' padding={3}>
              Arix
          </Link>
            <Text marginRight='auto' color='#E4E7EB'>
              , developed by Philip.
        </Text>
            <Text marginRight={100} color='#E4E7EB'>
              Philip King © 2020
        </Text>
          </Pane>
        </Pane>
      </Breakpoint>
    </BreakpointProvider>

  );
}

export default App;
