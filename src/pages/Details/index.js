import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  FaEdit,
  FaTimes,
  FaCalendarDay,
  FaMapMarkerAlt,
  FaSync,
} from 'react-icons/fa';

import {
  Container,
  Content,
  Loading,
  Header,
  Actions,
  Main,
  Informations,
} from './styles';
import Button from '~/components/Button';

import api from '~/services/api';
import history from '~/services/history';

function Details({ match }) {
  const { meetupId } = match.params;
  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${meetupId}/details`);
        setMeetup({
          ...response.data,
          formattedDate: format(
            parseISO(response.data.date),
            "d 'de' MMMM, 'às' HH':'mm",
            { locale: pt }
          ),
        });
        setLoading(false);
      } catch (err) {
        toast.error('Erro ao acessar os detalhes da Meetup');
        history.push('/dashboard');
      }
    }
    loadMeetup();
  }, [meetup.date, meetup.formattedDate, meetupId]);

  return (
    <Container>
      {loading ? (
        <Loading>
          <FaSync size={36} color="#fff" />
        </Loading>
      ) : (
        <Content>
          <Header>
            <h1>{meetup.name}</h1>
            <Actions>
              <Button type="button" color="#4DBAF9">
                <div>
                  <FaEdit color="#fff" />
                  Editar
                </div>
              </Button>
              <Button type="button">
                <div>
                  <FaTimes color="#fff" />
                  Cancelar
                </div>
              </Button>
            </Actions>
          </Header>
          <Main>
            <img
              // src="https://blog.snappa.com/wp-content/uploads/2019/02/Twitch-offline-banner-size.jpg"
              src={meetup.banner.url}
              alt=""
            />
            <p>{meetup.description}</p>
            <Informations>
              <div>
                <FaCalendarDay color="#999" />
                <span>{meetup.formattedDate}</span>
              </div>
              <div>
                <FaMapMarkerAlt color="#999" />
                <span>{meetup.location}</span>
              </div>
            </Informations>
          </Main>
        </Content>
      )}
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
