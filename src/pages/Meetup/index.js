import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Container, Content } from './styles';
import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';
import BannerInput from '~/components/BannerInput';

import api from '~/services/api';
import history from '~/services/history';

function Meetup({ title, match }) {
  const { meetupId } = match.params;
  const [meetup, setMeetup] = useState({});
  const userId = useSelector(state => state.user.id);

  const schema = yup.object().shape({
    name: yup.string().required('A meetup precisa ter um nome'),
    description: yup.string().required('A meetup precisa ter uma descrição'),
    location: yup.string().required('A meetup precisa tem uma localização'),
    date: yup.date().required('A meetup precisa ter uma data'),
    bannerId: yup.number(),
  });

  useEffect(() => {
    async function loadMeetup() {
      if (meetupId) {
        try {
          const response = await api.get(`meetups/${meetupId}/details`);
          setMeetup(response.data);
        } catch (err) {
          toast.error('Erro ao carregar Meetup');
          history.push('/dashboard');
        }
      }
    }
    loadMeetup();
  }, []); //eslint-disable-line

  async function saveMeetup(data) {
    try {
      const meetupData = { ...data, userId };
      if (meetupId) {
        await api.put(`meetups/${meetupId}`, meetupData);
        toast.success('Meetup editada com sucesso!');
      } else {
        await api.post('meetups', meetupData);
        toast.success('Meetup criada com sucesso!');
      }
      history.push('/dashboard');
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <Form schema={schema} initialData={meetup} onSubmit={saveMeetup}>
          <BannerInput name="bannerId" />
          <Input name="name" placeholder="Titulo do Meetup" />
          {/* unform is not working with miltiline */}
          <Input
            // multiline
            className="textarea"
            name="description"
            id="description"
            placeholder="Descrição completa"
          />
          <DatePicker name="date" placeholder="Data do meetup" />
          <Input name="location" placeholder="Localização" />
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

Meetup.propTypes = {
  title: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.string,
    }),
  }),
};

Meetup.defaultProps = {
  title: 'Criar Meetup',
  match: {
    params: {},
  },
};

export default Meetup;
