export const countRepoStars = async (user, userRepo) => {
  let starCount
  const url = `https://api.github.com/repos/${user}/${userRepo}`

  try {
    const result = await fetch(url)
    const data = await result.json()

    if (data.stargazers_count) {
      starCount = data.stargazers_count
    }
  } catch (error) {
    console.log(`Error counting stars: ${error}`)
  }

  return starCount
}
