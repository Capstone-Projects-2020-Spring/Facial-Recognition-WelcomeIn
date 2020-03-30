import Link from 'next/link'
import { Grid, Image, Divider, Button, Header, Modal, Input, Form, GridColumn } from 'semantic-ui-react'
import React, { useState } from "react";
import axios from "axios"


function Users() {

    const [name, setName] = useState("");
    const [list, setImage] = useState("");
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios.get("http://10.0.0.142:8007/friendlyfaces/", { timeout: 1000 }).then((responseGet) => setImage(responseGet.data));

    CancelToken: source.token;

    var users = [];

    //console.log(users.length);

    for (let i = 0; i < list.length; i++) {
        users.push(list[i])
    }



    //console.log(image)

    return (

        <div style={{ paddingLeft: '8px' }}>
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
                    <Link href="/footage">
                        <a className="item">
                            Footage
            </a>
                    </Link>
                    <Link href="/settings">
                        <a className="item">
                            Settings
            </a>
                    </Link>

                </div>
            </div>

            <div>
                <Modal trigger={
                    <Link href="/images"><button style={{ marginTop: '16px' }} class="medium ui button">
                        Add Authroized Individual
            </button>
                    </Link>
                }>
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='http://10.0.0.142/facial-recognition-application/sean.droke/FacialRecognitionRepo/backend/media/FriendlyFaces/dani_cXVUGbP.PNG' />
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
                        {users.forEach(element => {
                            console.log(element.Image);
                            return (
                                <GridColumn>
                                    <Image
                                        fluid
                                        label={{
                                            as: 'a',
                                            color: 'black',
                                            content: 'Name',
                                            ribbon: true,
                                        }}
                                        src={element.Image} size='small' />
                                </GridColumn>
                            )
                        })}
                    </Grid.Row>

                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <Image
                                fluid
                                label={{
                                    as: 'a',
                                    color: 'black',
                                    content: 'Megan',
                                    ribbon: true,
                                }}
                                src='http://10.0.0.142/facial-recognition-application/sean.droke/FacialRecognitionRepo/backend/media/FriendlyFaces/meghan.PNG' size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image
                                fluid
                                label={{
                                    as: 'a',
                                    color: 'black',
                                    content: 'Sean',
                                    ribbon: true,
                                }}
                                src='http://10.0.0.142/facial-recognition-application/sean.droke/FacialRecognitionRepo/backend/media/FriendlyFaces/Sean_Droke.PNG' size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image
                                fluid
                                label={{
                                    as: 'a',
                                    color: 'black',
                                    content: 'Maks',
                                    ribbon: true,
                                }}
                                src='http://10.0.0.142/facial-recognition-application/sean.droke/FacialRecognitionRepo/backend/media/FriendlyFaces/Max_G.PNG' size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image
                                fluid
                                label={{
                                    as: 'a',
                                    color: 'black',
                                    content: 'Dani',
                                    ribbon: true,
                                }}
                                src='http://10.0.0.142/facial-recognition-application/sean.droke/FacialRecognitionRepo/backend/media/FriendlyFaces/dani_cXVUGbP.PNG' size='small' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>



            </div>
        </div>)

    
}


export default Users