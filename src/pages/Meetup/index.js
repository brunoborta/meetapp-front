import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container, Content } from './styles';
import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';
import BannerInput from '~/components/BannerInput';

import api from '~/services/api';
import history from '~/services/history';

export default function Meetup() {
  const [title, setTitle] = useState('Criar Meetup');
  const userId = useSelector(state => state.user.id);

  async function saveMeetup(data) {
    try {
      const meetup = { ...data, userId };
      await api.post('meetups', meetup);
      toast.success('Meetup criada com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <Form onSubmit={saveMeetup}>
          <BannerInput />
          <Input name="name" id="name" placeholder="Titulo do Meetup" />
          <Input
            name="description"
            id="description"
            multiline
            placeholder="Descrição completa"
          />
          <DatePicker name="date" id="date" placeholder="Data do meetup" />
          <Input name="location" id="location" placeholder="Localização" />

          <Button type="submit">
            <div>
              <FaPlusCircle color="#fff" />
              Salvar Meetup
            </div>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
