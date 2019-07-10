import React from 'react';
import styled from 'react-emotion'
import { Deck, Heading, Slide, Text, Fill, Code, Image, Layout, CodePane } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

const images = {
  inputs: require('../assets/images/input.png'),
  focus: require('../assets/images/focus.gif'),
  dog: require('../assets/images/dog.gif'),
  focusVideo: require('../assets/images/focusShop.gif'),
  color: require('../assets/images/color.gif'),
  ramp: require('../assets/images/ramp.jpg'),
  happyDog: require('../assets/images/happydog.gif'),
  dance: require('../assets/images/dance.gif'),
  altDog: require('../assets/images/dog.jpg')
};

const code = {
  button: `<button> I am a button!</button>`,
  notButton: `<div class="button"> I am not a button!</div>`,
  badAlt: `<img src="doggo.png" alt="Picture of a dog">`,
  goodAlt: `<img src="doggo.png" alt="Hungry dog">`,
  inputLabel: `<label for="phoneNumber">Phone number</label>\n<input type="text" id="phoneNumber">`
};


const theme = createTheme(
  {
    primary: '#2B2B2D',
    secondary: '#009fd4',
    white: '#ffffff'
  },
  {
    primary: 'Quicksand'
  }
);

const StyledCode = styled('div')`
  border-radius: 6px;
  padding: 5px;
  color: #009fd4;
  width: auto;
  display: inline;
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={['zoom', 'slide']}
        transitionDuration={500}
      >
        <Slide bgColor="secondary">
          <Heading textColor="white">5 tips for more accessible apps! </Heading>
          <Text textColor="white">by Marjorie</Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor="white">#1</Heading><br/><br/>
          <Heading size={4} textColor="white">Use a <StyledCode>{'<button>'}</StyledCode> if you need a button</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <CodePane
            textSize="35px"
            lang="jsx"
            source={code.button}
            margin="20px auto"
            overflow="overflow"
            theme="light"
          />
          <Heading size={3}>VS</Heading>
          <CodePane
            textSize="35px"
            lang="jsx"
            source={code.notButton}
            margin="20px auto"
            overflow="overflow"
            theme="light"
          />
        </Slide>
        <Slide>
          <Heading size={1} textColor="white">#2</Heading><br/><br/>
          <Heading size={4} textColor="white">Every <StyledCode>{'<input>'}</StyledCode> needs a <StyledCode>{'<label>'}</StyledCode></Heading>
        </Slide>
        <Slide bgColor="secondary">
          <CodePane
              textSize="35px"
              lang="jsx"
              source={code.inputLabel}
              margin="20px auto"
              overflow="overflow"
              theme="light"
            />
        </Slide>
        <Slide>
          <Image src={images.dance}></Image>
        </Slide>
        <Slide>
          <Heading size={1} textColor="white">#3</Heading><br/><br/>
          <Heading size={4} textColor="white">Color contrast </Heading>
        </Slide>
        <Slide bgColor="yellow">
          <Heading size={4} textColor="white">These colors are amazing!</Heading>
        </Slide>
        <Slide>
        <Image src={images.color}></Image>
        </Slide>
        <Slide>
          <Heading size={1} textColor="white">#4</Heading><br/><br/>
          <Heading size={4} textColor="white">Alternative Text</Heading>
        </Slide>
        <Slide bgColor="secondary">
            <Image src={images.altDog} height="300"></Image>
            <CodePane
            textSize="35px"
            lang="jsx"
            source={code.badAlt}
            margin="20px auto"
            overflow="overflow"
            theme="light"
          />
          <Heading size={4} textColor="white">VS</Heading>
          <CodePane
            textSize="35px"
            lang="jsx"
            source={code.goodAlt}
            margin="20px auto"
            overflow="overflow"
            theme="light"
          />
        </Slide>
        <Slide>
          <Heading size={1} textColor="white">#5</Heading><br/><br/>
          <Heading size={4} textColor="white">Focus States</Heading>
        </Slide>
        <Slide>
          <Image src={images.focusVideo}></Image>
        </Slide>
        <Slide>
          <Image src={images.dog}></Image>
        </Slide>
        <Slide>
          <Heading size={4} textColor="white">What not to do</Heading>
          <Image height="600" src={images.ramp}></Image>
        </Slide>
        <Slide color="secondary">
          <Heading size={1} textColor="white">Thanks!</Heading>
          <Image src={images.happyDog}></Image>
        </Slide>
      </Deck>
    );
  }
}
