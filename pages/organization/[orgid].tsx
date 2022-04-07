import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Organization = () => {
  const [organization, setOrg] = useState<any>({})
  const router = useRouter()
  const { orgid } = router.query

  useEffect(() => {
    const fetchData = async (orgid: any) => {
      const res = await fetch(`/api/org/${orgid}`)
      const data = await res.json()
      console.log(data)

      setOrg(data)
    }
    fetchData(orgid)
  }, [orgid])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">HomePage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={organization.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {organization.name}
              </TableCell>
              <TableCell align="right">{organization.description}</TableCell>
              <TableCell align="right">{organization.homepageUrl}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Organization
