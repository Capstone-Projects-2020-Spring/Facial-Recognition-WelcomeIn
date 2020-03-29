import Link from 'next/link'
import { Grid, Image, Divider, Button, Header, Modal, Input, Form } from 'semantic-ui-react'
import React from 'react'


function Users() {

    return (<div style={{ paddingLeft: '8px' }}>
    <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        
      <h1 class="ui header">Authorized Individuals</h1>
      <div class="ui inverted menu">
      <Link href="/index">
          <a className="item">
          Home
            </a>
        </Link>
    <a class="active item">
      Authorized Individuals
      </a>
      <Link href="/settings">
          <a className="item">
          Notification Settings
            </a>
        </Link>
        <Link href="/footage">
          <a className="item">
          Footage
            </a>
        </Link>

    </div>
    </div>
    <div> 
    <Divider horizontal></Divider>
        <Modal trigger = {
            <button class="medium ui button">
                Add Authroized Individual
            </button>
        }>
            <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>Upload a photo of authorized individual</Header>
                        <p>
                        <form className="ui form">
                    <div className="field">
                        <label></label>
                        <input name="image" type="text" placeholder="image...">
                        </input>
                        <Divider horizontal></Divider>
                        <button class="small ui button">
                            Upload Image
                        </button>

                    </div>
                </form>
                        </p>
                    </Modal.Description>
                </Modal.Content>
        </Modal>
        <Divider horizontal></Divider>
        <div class="ui fitted divider"></div>
        <Divider horizontal></Divider>
    </div>

      <div>
            <Grid>
                <Grid.Row columns={4}>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/w_sexy_gr.jpg' size='small'/>
                </Grid.Column>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://i.pinimg.com/originals/73/03/7c/73037c827f6599e99b67a47ec78ea3ab.jpg' size='small'/>
                </Grid.Column>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://i.dailymail.co.uk/i/newpix/2018/03/19/20/4A59925C00000578-0-image-a-21_1521491098500.jpg' size='small'/>
                </Grid.Column>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://images.huffingtonpost.com/2014-07-24-ino.jpg' size='small'/>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={4}>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://st.depositphotos.com/1011382/2845/i/950/depositphotos_28451549-stock-photo-real-normal-person-portrait.jpg' size='small'/>
                </Grid.Column>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://i.pinimg.com/originals/30/e2/c4/30e2c4412ad3eb60c32a536401d7752f.jpg' size='small'/>
                </Grid.Column>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://i.dailymail.co.uk/i/pix/2014/02/11/article-2557079-1B65993300000578-704_306x423.jpg' size='small'/>
                </Grid.Column>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/m_sexy_gr.jpg' size='small'/>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                <Grid.Column>
                <Image
                    fluid
                    label={{
                    as: 'a',
                    color: 'black',
                    content: 'Name',
                    ribbon: true,
                    }}
                    src='https://external-preview.redd.it/VMlhpumIa6oUH0yrTp3jOBkhqre8wc1woOs3Fu8Xhyo.jpg?auto=webp&s=9d5034c105fc73275b429e22e8197ff72e32a73b' size='small'/>
                </Grid.Column>
                </Grid.Row>
            </Grid>



      </div>
    </div>) 
  }
  
  export default Users
