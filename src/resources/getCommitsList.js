import API from '../services/github.api'

async function getCommitsList(user, name) {
  return await API.get(`/repos/${user}/${name}/commits`)
}

export default getCommitsList